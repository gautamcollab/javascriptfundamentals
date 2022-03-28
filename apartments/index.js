

let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathrooms: 3, 
    windows: 0, 
    rent: 4500, 
    unit: '1A',
    tenants: []
}

let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathrooms: 1, 
    windows: 2, 
    rent: 1500, 
    unit: '1A',
    tenants: []
}

let apt3 = {
    bedrooms: 2, 
    sqft: 53, 
    bathrooms: 3, 
    windows: 2, 
    rent: 2400, 
    unit: '1C',
    tenants: []
}

let apt4 = {
    bedrooms: 0, 
    sqft: 11, 
    bathrooms: 0, 
    windows: 0, 
    rent: 900, 
    unit: '1D',
    tenants: []
}

let tenant1 = {
    name: 'John Doe', 
    creditScore: 400,
    salary: 15000, 
    age: 30, 
    pet: 'dog'
}

let tenant2 = {
    name: 'Jane Doe', 
    creditScore: 800,
    salary: 22000, 
    age: 33 
}


        
let building = {
    streetAddress: '74 N 7th Street, Brooklyn NY 11249',
    laundry: false,
    allowsPets: false,
    lease: function(apt, tenant) {
        if (apt.tenants.length === apt.bedrooms) {
        return `${apt.unit} is already full!`
        }
        if (this.allowsPets === false && tenant.pet){
            return `${apt.unit} is available, but you must give ${tenant.pet} up for adoption!`
        }
        let t = apt.tenants.push(tenant)
        console.log(tenant.name, 'has rented out', apt.unit)
        return t
    },
    occupiedApts: function() {
        // returns only the apts which have tenants inside them 
        //condition to test: apt.tenantslength
        return this.apartments.filter((el) => {
            return el.tenants.length > 0
        })
    },
    fullApts: function() {
        //returns only the apts which are completely full
        //condition to test: apts.tenantslength === apt.bedrooms
        return this.apartments.filter((el) => {
            return el.tenants.length === el.bedrooms
        })
    },
    apartments: [apt1, apt2, apt3]
}

const div = document.getElementById('building')

const render = () => {
    let h2 = document.createElement('h2')
    h2.innerText = building.streetAddress
    let ul = document.createElement('ul')
    building.apartments.forEach((element) => {
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.innerText = `RENT: Vacancies: ${element.bedrooms}`
        li.innerText = `${element.unit} vacancies: ${element.bedrooms}`

        btn.addEventListener('click', () => {
            if (element.bedrooms <= 0) return alert("NO MORE VACANCIES")
            let vacancies = element.bedrooms - 1
            btn.innerText = `RENT: Vacancies: ${vacancies}`
            element.bedrooms -= 1
        })
        li.append(btn)
        ul.append(li)
    })
    div.append(h2, ul)
}

render () 
