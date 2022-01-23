/**
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

 You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.



 Example 1:

 Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 Output: ["Shogun"]
 Explanation: The only restaurant they both like is "Shogun".
 Example 2:

 Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
 Output: ["Shogun"]
 Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).


 Constraints:

 1 <= list1.length, list2.length <= 1000
 1 <= list1[i].length, list2[i].length <= 30
 list1[i] and list2[i] consist of spaces ' ' and English letters.
 All the stings of list1 are unique.
 All the stings of list2 are unique.
 */

func findRestaurant(list1 []string, list2 []string) []string {
    var (
    priority1 = make(map[string]int)
    results = make([]string, 0)
    min = 2_000
)

    // store the priorities of person one in a hash map
    for idx, rest := range list1{
        priority1[rest] = idx
    }

    //compare priorities of person one with person two, make array based on highest average priority
    for idx, rest := range list2 {
        if val, ok := priority1[rest]; ok {
            priority2 := val + idx
            if priority2 < min {
                min = priority2
                results = []string{rest}
            } else if priority2 == min {
                results = append(results, rest)
            }
        }
    }

    return results
}
