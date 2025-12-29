package main

import "fmt"

func main() {

	a := [11]int{1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3}

	var mapOfIntValues = make(map[int]bool)

	var notUniqueElements []int

	for _, value := range a {
		_, ok := mapOfIntValues[value]
		if ok {
			notUniqueElements = append(notUniqueElements, value)
		}
		mapOfIntValues[value] = true
	}

	fmt.Println(notUniqueElements)

}
