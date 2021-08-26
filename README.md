# Relational Abilities Index Plus
This repository contains open source code for the Relational Abilities Index Plus, a procedure designed to assess verbal relational responding skills in adults. 

## Overview of files:
1. generate_stimuli: A folder containing an R markdown file used to generate the stimulus trial lists for the RAI+. Two .csv files are also present, which consist of the trial lists for the non-analogical and analogical trials of the RAI+ (these need to be separated due to the fact they require slightly different canvas screens within the RAI implementation).
2. rai-plus: A folder containing the necessary code for implementing the RAI+ online. To use the RAI+, simply paste this folder to your personal server as you would any other site. Data are saved in a generated "data" folder in .sqlite format.
3. rai-plus.json: .json file containing the script for the RAI+ implementation. 

## To-do:

1. Add randomisation for the position of "Yes"/"No" buttons (should take 2 minutes)
2. Increase number of possible stimuli drawn from arrays (not necessary, but might be nice)
3. Add R script for extracting data from .sqlite folder (already have implementation, just need to generalise it for this)
4. Add css styling (very bare bones at the moment)

