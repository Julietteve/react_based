const profile= {
    name: "July"
}

const region= {
    city: "Wellington",
    info: {
        country: "New Zealand"
    }
}

const social={
    fb: "doesnt have"
}

const result= Object.assign( //Object.assign() creates a new object, taking properties from another objects. First add {} --the new object itself-- , then call the another objects you want to extract properties from....
    {},
    profile,
    region,
    social,
    {
        info: Object.assign({}, region.info) //WATCH OUT! Here a new object is created inside the main object.assign() to reach an intenal object.
    }
    )
console.log(result)

// But Object.assign has limitations, it never interates deeply. It means, never goes across an object, inside another objects. Just reaches the superficial object. To go deeper, we must use an object.assign() inside another object.assign()

// Method with OBJECT.SPREAD {...}
// Uses the same logic than object.assing(), it also doesn't interate deeply, needs spread>spread

const social={
    fb: "doesnt have"
}

const result= {
  ...profile, // uses ... before call the object to combine
  ...region,
  ...social,
  info:{
    ...region.info,
  }
}


////////////////////////////////////// HOW TO ADD/ REMOVE FROM AN ARRAY
// Using PUSH()-- to add an element to the end of the array-- and POP() --to delete the last element of an array-- have not a great performance in a great scale, it´s better to use the object Spread method, simplier and faster.
// Also you may use the method array.concat(array2) to join two arrays. But those are imperative methods, and to very convenient or flexible to work with...

const fruits= ["melon", "grapes", "watermelon"]
const vegetables=["pumpkin", "onion", "carrot"]
vegetables.push("parsley")
fruits.pop("melon")
const mix= vegetables.concat(fruits)

 console.log(mix) 

 // On these cases, it's better to use an object spread, that joins so many arrays as we want, and we can add more elements at any point of the array

 const mixture =[ // Use [], we are working with arrays, not objects, YOU FOOL!
    ...fruits,
    "pear",
    ...vegetables,
    "parsley",
]

console.log(mixture)


// 



