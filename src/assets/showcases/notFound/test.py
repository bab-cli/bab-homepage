import pyfiglet
import os

def generate_ascii_arts(text="404"):
    """
    Generate ASCII art using pyfiglet with various fonts

    Args:
        text (str): Text to convert to ASCII art
    """
    # Create output directory
    os.makedirs('ascii_404_arts', exist_ok=True)

    fonts = [
        '3-d', 'banner', 'big', 'block', 'bubble', 'digital',
        'doom', 'epic', 'lean', 'mini', 'alligator2', 'alphabet'
        'shadow', 'slant', 'speed', 'standard', 'barbwire', 'bell', 'bigchief', 'binary', 'catwalk', 'chunky',
        'stop', 'thick', 'thin', 'tinker-toy', 'colossal', 'cosmic', 'cricket', 'hollywood',
        'alligator', 'avatar', 'banner3-D', 'bulbhead',
        'char1', 'clay', 'coinstak', 'colossal', 'o8', 'puffy', 'sblood', 'smisome1', 'smkeyboard', 'stellar', 'ticksslant',
        'dotmatrix', 'larry3d', 'lean', 'nancyj-fancy',
        'letters', 'lildevil', 'mini', 'squiggle', 'univers',
        'starwars', 'twisted', 'wavy', 'small', 'starwars'
    ]

    # Generate ASCII art for each font
    for font in fonts:
        try:
            # Generate ASCII art
            ascii_art = pyfiglet.figlet_format(text, font=font)
            lines = ascii_art.splitlines()
            while lines and not lines[0].strip():  # Remove lines that are empty or filled with spaces
                lines.pop(0)

            # Rejoin the remaining lines back into a single string
            ascii_art = '\n'.join(lines)

            # Create filename
            filename = f'ascii_404_arts/404_{font}.txt'

            # Write to file with bab command and colored span
            with open(filename, 'w') as f:
                     # Write the HTML container with centering styles

                     # Write the bab command
                     f.write(f'bab "{text}" --font "{font}"\n')
                     f.write(f'<div style="text-align: center; font-family: monospace;">')

                     # Write the colored span opening
                     f.write('<span class="text-center" style="color: #9e3636;">\n')

                     # Write the ASCII art
                     f.write(ascii_art)

                     # Write the colored span closing
                     f.write('</span>\n')

                     # Close the div container
                     f.write('</div>\n')


            print(f"Generated {filename}")

        except Exception as e:
            print(f"Could not generate art with font {font}: {e}")

# Ensure pyfiglet is installed
if __name__ == "__main__":
    try:
        import pyfiglet
        generate_ascii_arts()
    except ImportError:
        print("Please install pyfiglet first with: pip install pyfiglet")