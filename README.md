### English 298DH Final Project, Marie Konopacki
## Text Visualizer: Novels to Pixel Art

For my final project for methods in the Digital Humanities, I decided to experiment with visualizing text. Essentially, I extracted all instances of color in books, and converted them into pixel art, demonstrating the colors and their proportion to one another. For instance, here's what Dorothy and the Wizard in Oz looks like:

<img src="https://text-visualizer.netlify.app/static/cfcb060f319a38bf023110559254ed48/aac8d/dorothy-and-the-wizard-of-oz.jpg" width="40%">

About the repository:
  - **color_databases/color_db_scraper.py**: This program I wrote scrapes an established color database from [ColorHexa](https://www.colorhexa.com/color-names), with some few personal additions and subtractions. 
  - **color_databases/colors.py**: A python list of the extracted colors.
  - **color_databases/colors_with_hexes.py**: A python dictionary of the same extracted colors as keys, with their according hex color code as values. 
  - **text_samples/**: A folder with self-selected text files. I got these from [Project Gutenberg](https://www.gutenberg.org/). 
  - **color_mapper.py**: Where the magic happens. 
    - For each text in text_samples, the program does the following:
      1. Checks if any words match the colors list. If a word matches, it adds it to a Color Frequency dictionary for that specific text. After checking through an entire text, the Color Frequency dictionary shows how many times each color appears in a text.     
          - Ex) {'blue': '15', 'red': '9', 'magenta': '3'}
      2. For each color in the Color Frequency dictionary, it converts into a percent of the total # of color instances and multiply by the total number of pixels. Instead of naming it by the color, it is now using its hex code value.
          - Ex) {'#0000ff': '3556', '#ff0000': '2133', '#ff00ff': '711'}
          - If the color blue (#0000ff) appears 15 times, there are 27 instances of colors, there are 6400 total pixels, then 15 / 27 * 6400 = 3556. The color blue will then take up 3556 pixels in the final image.
          - This program creates a 80x80 grid (6400 pixels), but you can make it smaller or larger by changing the Pixels variable to any value that has a square root. 
      3. Now, it iterates through this new dict, and appends the hex color code to a new list as many times as the dict says. 
          - Ex) ['#0000ff', '#0000ff', '#0000ff', '#0000ff'...]
          - There are now 3556 instances of '#0000ff', 2133 of '#0000ff', and 711 of '#ff00ff' in this list.
      4. It now scrambles the list and divides it into a list of equal-length lists. 
         - Since the square root of 6400 is 80, this creates a list of 80 lists, with each list inside containing 80 colors. 
      5. Using the Turtle python package, iterating through each of the lists, it draws each item in the list as a pixel, filled in with its respective color. It creates a new row after finishing each list. 
      6. Export finished drawing as an EPS vector file. The program also exports a Python dictionary of dictionaries that reports the Color Frequencies for each text. 

  
To create your own images:
- Download **color_mapper.py, text_samples/, and color_databases/** (The rest of the files/folders in this repo are for building the website to display the particular texts I was interested in.)
  ⋅⋅⋅- You can edit color_databases/colors.py and color_databases/colors_with_hexes.py to add and remove colors. Remember to make changes to both of these folders.
  ⋅⋅⋅- You can also change text_samples to include any text files.
- Install all node packages in color_mapper.py (nltk.tokenize, math, numpy, operator, os, re, random, turtle)
- Run color_mapper.py 
- From there, you'll receive outputted EPS files (vector images) under a new folder "Raw-image-output" as well as a new file titled "all-text-color-frequency.py", which gives the # of color appearances in a given text in a Python dictionary. 
- What you do with these vectors and data are up to you! You can convert the EPS files to JPG or PNGs using online converters such as [this one](https://image.online-convert.com/convert/eps-to-jpg)
