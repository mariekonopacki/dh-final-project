from color_databases.colors import colors_list
from color_databases.colors_with_hexes import colors_with_hexes
from nltk.tokenize import word_tokenize
import math
import numpy
import operator
import os
import re
import random
import turtle
from turtle import *

# Set the number of pixels in the final image output. 6400 = 80x80 grid
pixels = 6400

files = [i for i in os.listdir("text_samples")]
all_text_color_frequency = {}

# Iterate through all text files
for t_file in files:
    color_frequency = {}
    total_colors = 0

    with open('text_samples/' + t_file) as text_file:
        # Split text into individual words, divided by whitespace and punctuation
        text = re.findall(r"[\w']+|[.,!?;-]", text_file.read())

        # For each word, check if it appears in the list of colors
        for word in text:
            if word.lower() in colors_list:
                if word.lower() in color_frequency:
                    color_frequency[word.lower()] += 1
                else:
                    color_frequency[word.lower()] = 1
                total_colors += 1

    # Sort color frequency by descending value
    color_frequency = dict(sorted(color_frequency.items(), key=operator.itemgetter(1),reverse=True))

    all_text_color_frequency[t_file] = [total_colors, color_frequency]

    # Create a list of lists, where each element of the list is a "pixel"
    text_color_map = []

    # For each color in the text, proportion out the # of pixels
    for color in color_frequency:
        value = int(round(color_frequency[color] / total_colors * pixels))
        for i in range(value):
            text_color_map.append(colors_with_hexes[color])

    # Shuffle the colored pixels & cut off any excess due to rounding
    random.shuffle(text_color_map)
    text_color_map[:value]

    # Split huge array into equal parts to create square final image
    finished_map = numpy.array_split(numpy.array(text_color_map), math.sqrt(pixels))
    finished_map = [l.tolist() for l in finished_map]

    # Start turtle, a python visualization module
    myPen = turtle.Turtle()
    turtle.tracer(0)
    turtle.speed(0)
    turtle.setup(width=780,height=780)
    turtle.hideturtle()

    # Define the shape of each pixel
    def box(intDim):
        myPen.begin_fill()
        # 0 deg.
        myPen.forward(intDim)
        myPen.left(90)
        # 90 deg.
        myPen.forward(intDim)
        myPen.left(90)
        # 180 deg.
        myPen.forward(intDim)
        myPen.left(90)
        # 270 deg.
        myPen.forward(intDim)
        myPen.end_fill()
        myPen.setheading(0)

    boxSize = 9
    myPen.penup()
    myPen.goto(-365,355)

    # For each element in the list, make an according pixel
    for i in range (0,len(finished_map)):
        for j in range (0,len(finished_map[i])):
            if finished_map[i][j]!=1:
        	    box(boxSize)
            myPen.color(finished_map[i][j])
            myPen.penup()
            myPen.forward(boxSize)
            myPen.pendown()
        myPen.setheading(270)
        myPen.penup()
        myPen.forward(boxSize)
        myPen.setheading(180)
        myPen.forward(boxSize*len(finished_map[i]))
        myPen.setheading(0)
        myPen.pendown()

    # Output as eps file (to later be converted to PNG)
    turtle.hideturtle()
    myPen.hideturtle()
    myPen.getscreen().update()
    ts = turtle.getscreen()
    file_name = "raw_image_output/" + t_file + ".eps"
    ts.getcanvas().postscript(file=file_name)


# Use the data of all of the text's color frequencies
f = open( 'all_text_color_frequency.py', 'w' )
f.write(str(all_text_color_frequency))
f.close()
