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

#string commands
puts [string compare "Golden" "light"]

puts [string index "Timing Path" 4]

puts [string length "Timing Path"]

puts [string range "I am studying TCL" 2 12]

puts [string tolower "MARYAM"]

puts [string toupper "maryam"]

set s1 "::: Mary Hzv Ottawa CA :::"
set s2 "Ottawa CA :::"
set s3 "::: Mary"
set s4 ":"

puts "Trim Right: \"$s2\" in \"$s1\"]"
puts "new string: [string trimright $s1 $s2]"


puts "Trim left: \"$s3\" in \"$s1\"]"
puts "new string: [string trimleft $s1 $s3]"

puts "Trim on both side: \"$s4\" in \"$s1\"]"
puts "new string: [string trim $s1 $s4]"

set s5 "test-id@example.com"
set s6 "*@*.com"
puts "Matching pattern $s6 in $s5"
if {[string match $s6 $s5 ]} {
    puts "match found"
} else {puts "match not found"}

puts "Matching pattern \"tcl\" in $s5"
if {[string match {tcl} $s5]} {
    puts "match found"
} else {puts "match not found"}

set s7 "We love to study tcl "
append s7 "by you"
puts $s7


#list part 1
set l "a b c"
puts "Item at index 2 of the list {$l} is : [lindex $l 2] \n"

set list [split 7/4/1776 "/"]
puts "We celebrate on the [lindex $list 1]'th day of the [lindex $list 0]'th month" 

# iterating over List
set p 0
foreach q $l {
    puts "$q is item number $p in list l"
    incr p
}

#practice List
set list1 "a-1 b-1 c-1"
set list2 [split $list1 "-"]
puts $list2
puts "item at 2nd index in list2 is [lindex $list2 2]"

#list part 2
#concat example
set emp_name1 "Jacob"
set emp_name2 "Tina"
set emp_name3 "Ryan"
set employee_list [concat $emp_name1 $emp_name2 $emp_name3]
puts $employee_list

#linsert example
set names "Jacob Ryan Marshal Rosy"
set new_names [linsert $names 2 "John"]
puts "Old list : $names "
puts "New list : $new_names"

#lreplace example
set new_names [lreplace $names 2 2 "John"]
puts "Old list : $names "
puts "New list : $new_names"

#list part 3
#lappend example
set employee_list2 "Jacob Ryan Marshal Rosy"
set new_employee "Mary"
puts "Old database: $employee_list2"
lappend employee_list2 $new_employee
puts "updated database: $employee_list2"

#llength example
puts "Size of employee list : [llength $employee_list2]"

#lsort
set sorted_list [lsort $employee_list2]
puts "Old list : $employee_list2"
puts "Sorted list : $sorted_list"

set time_ps [list -23.06 -2.97 -11.35 -9.4]
puts [lsort -real -decreasing $time_ps]

#lrange example
puts [lrange $employee_list2 1 2]

#file handling
set filename "results.rpt"
set file_handle [open $filename r]
while { [gets $file_handle data] >= 0 } {
    #printng only the index
    #puts [lindex $data 5]
    #puts "[lindex $data [expr [llength $data] -1]]"
    if {[lrange $data end end] == "Pass"} {
        #print device id if the result is pass
        puts [lindex $data 0]
        }
    }
close $file_handle


#Procedures in tcl (functions)
#Proc with multiple argumenrs
proc sum {a b} {
    return [expr $a + $b]
}

puts [sum 3 5]

proc employee_modificatin {emp_ID} {
    return [join [list "1" $emp_ID] ""]
}
puts [employee_modificatin 6784]

#Argumenrs with defualtvalues
proc employee_modificatin2 {emp_ID_2 {code 000}} {
    #set code 123 -> if not set code will conside 000
    return [join [list $code $emp_ID_2] ""]
}

puts [employee_modificatin2 6784]
puts [employee_modificatin2 6784]

#Proc with variable argumenrs
set employees [list "Mary" "Alice" "Bob" "Nick"]

proc email {employee_names} {
    set emp_ID {}
    foreach name $employee_names {
        set ID [join [list $name "/@ymail.com"] ""]
        lappend emp_ID $ID
    }
    return $emp_ID
}
puts [email $employees]

#nested list in tcl
set filename "results.rpt"
set file_handle [open $filename r]
set data {}
while { [gets $file_handle line] >= 0} {
    #puts "[lindex $line 3] and [lindex $line 4]"
    set volts [join [list [lindex $line 3] mV] {}]
    set current [join [list [lindex $line 4] nA] {}]

    set line [lreplace $line 3 3 $volts]
    set line [lreplace $line 4 4 $current]
    puts $line
}
