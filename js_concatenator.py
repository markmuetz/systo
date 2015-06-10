#!/usr/bin/env python
import os

def main():
    filenames = []
    with open('js_filenames.txt', 'r') as f:
        filenames = f.readlines()

    if not os.path.exists('static/js/_build'):
        os.makedirs('static/js/_build')
    with open('static/js/_build/systo-complete.js', 'a') as outfile:
        for filename in filenames:
            if filename.startswith('#'):
                continue
            with open(filename.strip(), 'r') as infile:
                outfile.write(infile.read())
            

if __name__ == '__main__':
    main()
