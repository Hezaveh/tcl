set var "5 Jone";
puts "var is $var";


set a 2
set b 3
set c [expr "$a + $b"]
puts $c

set d [expr "$a - $b"]
puts $d

set f [expr "$a * $b"]
puts $f

set x "[set y {Mary}]"
puts "$x and $y"


set z 1
if {$z == 2} {puts "z is 2"} else {puts "z is not 2"}

set k 0
while {$k < 6} {
    puts "k is $k"
    set k [expr $k + $z]
}

for {puts "Start"; set i 0} {$i < 2} {incr i; puts "I after incr: $i"} {
    puts "I inside first loop: $i"
}


# Array
set institute(0) University
set institute(1) of
set institute(2) Ottawa

puts $institute(0) 
puts $institute(1) 
puts $institute(2) 

# iterating over Array
for {set index 0} {$index < [array size institute]} {incr index} {
    puts "institute($index): $institute($index)"
}

#foreach Loop
foreach index [array names institute] {
    puts "institute($index): $institute($index)"
}

# associative Array
set employee1(Name) "Jim"
set employee1(Age) 24
puts $employee1(Name)
puts $employee1(Age)
puts [array names employee1]

#practice array of continus indices
set array1(0) a
set array1(1) b
set array1(2) c
set array1(3) d
set array1(4) e

set element_to_find d

foreach number [array names array1] {
    if {$array1($number) == $element_to_find} {
        puts "found: $array1($number)"
    }
}

#practice associative array
set students(Jacob) 24
set students(Ryan) 27
set students(Callie) 27
set students(John) 29
set students(Yang) 21

set name_to_find Callie

foreach name [array names students] {
    if {$name == $name_to_find} {
        puts "Name: $name"
        puts "Age: $students($name)"
    }

}

#escape sequences
puts "\n"
puts "\\n"
puts "tab \t and no tab \\t"