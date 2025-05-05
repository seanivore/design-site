# Interactive Homepage Animation Mathematics & Logic Sketch 

- Small rectangles in rows; more than you can count 
- Each rectangle moves in a specific way at a specific time
- The intended visual effect is like "the wave" in a stadium 
- If the rectangles narrow lengthwise to a middle-line, then expand outwards again 
- On the new side we want to make it look like "the back" so that the VFX is that it flipped over 
- Then that pattern would start in the middle bottom and expand up and outwards 
- Timing should be such that the rectangle goes through 5 angles of rotation 
- 0º FLAT --> *36º* --> **72º** --> **108º** --> *144º* --> 180º FLAT
- 100 rectangles wide 
- abcdefghijklmnopqrstuvwxyz, then aa, bb, cc, etc. going south to north 
- Count 1 to 100 going west to east 
- Each time they move up, one more from the left and right of the next row start, and to each side of the previous row 
- It expands west and east as it moves north 
- There are only 6 rows in any column rotating at any time 

FLOW: 
                                  A50-36, A51-36
                 A49-36, *A50-72*, B50-36, B51-36, *A51-72*, A52-36
A48-36, A49-72, **A50-108**, *B50-72*, C50-36, C51-36, *B51-72*, **A51-108**, A52-72, A53-36



                     000000 000001 000011 000111 001111 011111 111111 111110 111100 111000 110000 100000 000000
              000000 000001 000011 000111 001111 011111 111111 100001 111111 111110 111100 111000 110000 100000 000000
       000000 000001 000011 000111 001111 011111 111111 111110 000000 011111 111111 111110 111100 111000 110000 100000 000000
000000 000001 000011 000111 001111 011111 111111 111111 111000 000000 000111 111111 111111 111110 111100 111000 110000 100000 000000


               0000 0001 0011 0111 1111 1110 1100 1000 0000
          0000 0001 0011 0111 1111 1001 1111 1110 1100 1000 0000
     0000 0001 0011 0111 1111 1110 0000 0111 1111 1110 1100 1000 0000
0000 0001 0011 0111 1111 1111 1100 0000 0011 1111 1111 1110 1100 1000 0000


Now imagine the rectangles that 100% opacity except for the wave. 
There are still 6 phases to a wave. But we'll count four as being simpler and not count the 0º phase. 
Outer two are midpoint. Inner two are peak wave. 
The middle two of the wave are an inverted filter.
The outer two are blurred filter. 

Imagine that FX over the top of a normal website. It seems like nothing between you and the content. 
Then you click. The spot you click triggers a wave that expands in a circle all directions. 
It moves across the screen in 2-3 seconds. Then you have normal page access. 

