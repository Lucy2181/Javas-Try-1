//This is the "forever" function, this can activate the LEDs in a loop, and again and again
basic.forever(function () {
    //This is the first "ShowLeds" function, this can turn on and off some Leds, with teir order
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        //This is the second "ShowLeds" there more LEDs are, this is a heart :D
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
  //Let's for another loop, do and show it again 
     basic.showLeds(`
         . . . . . 
         . . . . .
         . . # . . 
         . . . . .
         . . . . .
     `)