set list "699 49 3 92 -1 1 990 9887669999 -19"
puts "First list: $list"

#sum
proc sum {l} {
    expr [join $l +]
}

set sumValue [sum $list]
puts "Sum of the values in the list: $sumValue"


#average
proc average {l} {
    expr [sum $l]/[llength $l].
}

set averageValue [average $list]
puts "Average of the values in the list: $averageValue"

#median
proc median {l} {
    set list [lsort $l]
    set len [llength $l]
    if {$len & 1} {
       #the number of elements are odd => the middle element
       return [lindex $l [expr {$len >> 1}]]
    } else {
       #the number of elements are even => average the middle two
       return [average [lrange $l [expr {($len >> 1) - 1}] [expr {$len >> 1}]]]
    }
}

set medianValue [median $list]
puts "Median of the values in the list: $medianValue"

#descending sort
proc descendingSort {l} {
    lsort -integer -decreasing $l
}

set descendingSortList [descendingSort $list]
puts "Descending order list: $descendingSortList"

#list of numbers that contain the digit 9
proc isNinePresented {l} {
    set listOfNines {}
    foreach hasNine $l {
        if {[regexp {[.9.]} $hasNine]} {
            lappend listOfNines $hasNine
        }
    }
    return $listOfNines

}

set ninePresentedList [isNinePresented $list]
puts "List of numbers that contain the digit 9: $ninePresentedList"

#unit tests
proc test {command expected} {
    catch {uplevel 1 $command} result ;
    if {$result != $expected} {error "$command->$result, expected $expected"
    } else {puts "Passed"}
}

puts "Unit tests:"
test {expr [sum $list]} 9887671813
test {expr [average $list]} 1098630201.4444444
test {expr [median $list]} -1




