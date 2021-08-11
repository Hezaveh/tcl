for {puts "Start"; set i 1} {$i <= 100} {incr i} {
    if {[expr "$i % 15"] == 0} {
    puts "Hello World!"
    } elseif {[expr "$i % 3"] == 0} {
    puts "Hello"
    } elseif {[expr "$i % 5"] == 0} {
    puts "World"
    } else {
    puts "$i"
    }
}


