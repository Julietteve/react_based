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



