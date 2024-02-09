# Random HSR Character Generator

## Overview

This is a simple js project, run and tested locally with node.js.  Running 
the script will generate a character with attributes of that of Honkai 
Star Rail; that is, a name, a type, and a path.

## Expected output

Run this program in the command line with the command 

    node script.js  

The expected output, printed to the terminal window, should be something 
like

    Your HSR Character is: Aaron, a Physical-Type character on the Path of 
Harmony.

## Room for Extension

The initial limited scale approach for this project will select a random 
name from a limited local array of names, but perhaps there's a name 
aggregator site that has an API that can be queried instead?  Or, at the 
very least, it may have a .txt or .csv of names, which could be read by 
the program instead to create the array of names.

A random stat allocator could also be made, based off of character average 
stats.  A character has stats such as *HP*, *Attack*, *Defense*, and 
*Speed*, and these stats can be **Average**, **Slightly Below Average**, 
**Moderately Below Average**, **Slightly Above Average**, or **Above 
Average**.  A more sophisticated implementation would take a character's 
Path into account, and could use randomized standard deviations from each 
mean stat to provide a realistic, but random, allocation of stats.
