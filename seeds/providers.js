exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([{
          id: 1,
          name: 'The Mens Night Shelter',
          description: "We provide 3 levels of accommodation support:<br> <br>Stage 1: dormitory style accommodation which including shower and laundry facilities ($10 a night)<br>Stage 2: hostel room accommodation ($80 a week)<br>Stage 3: community support (temporary emergency shelter)<br><br>Dormitory services include a bed for the night, shower facilities, clothes washed, cup of tea. Occasionally some light food is donated and made available.<br><br>Facilities: Bathroom, Laundry & Food.",
          address: "304 Taranki St, Mt. Cook, Wellington 6011",
          phone: "(04) 385-9546",
          update_message: "fully functional",
          lat: -41.300598,
          long: 174.774082,
          email: "menshelter@hotmail.com",
          website_url: "http://wellingtonnightshelter.org.nz/",
          hours: "Open: 7 days a week, all year round<br>Checkin: 5:30pm – 9:00pm<br>Checkout: 6:00am – 7:30am",
          image_url: "/images/providersimages/Mens-Night-Shelter.jpeg",
        },
        {
          id: 2,
          name: 'Compassion Soup Kitchen',
          description: "Breakfast is free, dinner costs $2 each night, or guests can buy a five or ten trip meal ticket. We believe the $2 charge supports the dignity of guests by involving choice and purchase rather than charity, and it encourages people to think about budgeting and how they prioritise spending their money.<br>In the mornings we serve hot soup and bread. The evening meals are ‘family style’ meals – for example, roast pork and vegetables, chicken and pasta, stews and vegetables. We usually serve dessert three nights per week and fresh fruit whenever it is available. Our kitchen staff works hard to ensure that the meals have a high nutritional value as we are aware that many of our guests rely on the food service here to meet their daily recommended intake across all food groups.<br>Every day is different – sometimes we serve up to 100 people in an evening and 60 for breakfast. Other days can be  quieter and numbers can go up and down for no obvious reason. Some people have been coming for long periods and others pass through. When someone stops coming we often don’t know the reasons. Catering for the fluctuating number of guests is one of the challenges for the kitchen staff – but we never run out of food!",
          address: "132 Tory St, TeAro, Wellington 6011",
          phone: "(04) 385 9299",
          update_message: "fully functional",
          lat: -41.296888,
          long: 174.779067,
          email: "compassionsoupkitchen@hotmail.com",
          website_url: "https://soupkitchen.org.nz/about-us/",
          hours: "Open: Monday-Friday 9am-4pm",
          image_url: "/images/providersimages/Compassion-Soup-Kitchen.jpeg"
        },
        {
          id: 3,
          name: 'Wellington City Mission',
          description: " What to bring!! <br><br>If you are working:<br>An ATM receipt or bank statement<br>Your latest payslip<br>If you are receiving a Work and Income benefit/student allowance:<br>An ATM receipt or bank statement<br>A breakdown of your benefit or statement letter from Studylink<br>A printout of your Work and Income entitlements or a decline letter<br>If you have no income:<br>An ATM receipt or bank statement<br>A benefit stop or stand down letter/your final payslip<br>You are able to request these Work and Income documents over the counter at any of their offices.",
          address: "19 Gordon Place, Newtown, Wellington",
          phone: "(04) 245 0829",
          update_message: "fully functional",
          lat: -41.315028,
          long: 174.779635,
          email: "wellingtoncitymission@hotmail.com",
          website_url: "https://www.wellingtoncitymission.org.nz/struggling-to-put-food-on-the-table/",
          hours: "Open: Monday to Thursday 10.00am to 3.00pm and Fridays 10.30am to 3.00pm",
          image_url: "/images/providersimages/City-Mission-Store.jpg"
        },
        {
          id: 4,
          name: 'St Vincent De Paul Wellington',
          description: "WHAT SHOULD I BRING WHEN ACCESSING A FOOD PARCEL?<br>A form of photo I.D.<br>Decline letter from Work and Income showing that no food grant is available and a breakdown of the Work and Income benefit received.<br>Income details.<br>A bank statement with your last transactions.<br>If applicable, a copy of your budgeting sheet prepared by a qualified budgeter.<br>If you do not have any of the above documents, come in anyway and chat to our team to discuss other options.",
          address: "Level 1, 207 Riddiford Street, Newtown, Wellington 6021",
          phone: "(04) 389 7122",
          update_message: "fully functional",
          lat: -41.314738,
          long: 174.780324,
          email: "vinniesWellington@hotmail.com",
          website_url: "https://www.vinnies-wellington.org.nz/food-bank/",
          hours: "Open: Monday-Friday 9am-4pm",
          image_url: "/images/providersimages/StVincientDePaulWellington.jpg"
        },
        {
          id: 5,
          name: 'The Salvation Army',
          description: "Please bring suitable I.D amd proof of address.",
          address: "204 Cuba Street, Te Aro, Wellington 6011",
          phone: "(04) 384 4713",
          update_message: "fully functional",
          lat: -41.295214,
          long: 174.774482,
          email: "salvationArmy@hotmail.com",
          website_url: "https://www.salvationarmy.org.nz/help-us/food-banks",
          hours: "Open: Monday-Friday 9am-5pm",
          image_url: "/images/providersimages/TheSalvationArmy.jpg"
        },
        {
          id: 6,
          name: 'DCM',
          description: "DCM has adopted the byline “together we can end homelessness in Wellington” which reflects our current focus on the needs of one key marginalised group – people experiencing homelessness, or who are at risk of homelessness, supporting them on a journey towards sustainable housing and wellbeing.  Over the past decade we have supported literally hundreds of people to successfully exit homelessness and sustain housing.<br>The most marginalised people in our city come to us because they genuinely feel welcome and because what we do works and makes a difference in their lives. ",
          address: "2 Lukes Lane, Te Aro, Wellington",
          phone: "(04) 384 7699",
          update_message: "fully functional",
          lat: -41.291628,
          long: 174.778409,
          email: "DCM@hotmail.com",
          website_url: "https://www.dcm.org.nz/contact/",
          hours: "9am-4pm",
          image_url: "/images/providersimages/DCM.jpg"
        },
        {
          id: 7,
          name: 'Wesley Methodist Church',
          description: "Showers available from 9am–5pm, Monday–Friday",
          address: "75 Taranki Street, Te Aro, Wellington 6011",
          phone: "(04) 384 7695",
          update_message: "fully functional",
          lat: -41.293654,
          long: 174.7786946,
          email: "wesleymethodistchurch@hotmail.com",
          website_url: "http://www.wesleychurch.org.nz/index.php/about-us",
          hours: "Monday-Friday, 9am-5pm",
          image_url: "/images/providersimages/Wesley-Methodist-Church.jpeg"
        },
        {
          id: 8,
          name: 'Catacombs',
          description: "Catacombs is a drop in centre for inner city Wellington residents, including homeless and people in transit, providing a place for people to socialise and keep warm. There is a TV lounge, phone for local calls, shower and laundry facilities.",
          address: "Level 1, 131 Manners Street, Te Aro, Wellington 6011",
          phone: "(04) 384 3329",
          update_message: "fully functional",
          lat: -41.2936975,
          long: 174.778335,
          email: "Catacombs@hotmail.com",
          website_url: "https://www.facebook.com/pg/Catacombs-Incorporated-226736744022280/about/",
          hours: "Open: 7–10pm, Monday–Friday, 2.30–10pm, Saturday, 11am–10pm, Sunday",
          image_url: "/images/providersimages/Catacombs.jpeg"
        },
        {
          id: 9,
          name: 'Evolve',
          description: "Free healthcare and social support for people aged 10–25 years.<br>Includes medical service, counselling, advocacy, alcohol and drug<br>support, accommodation and employment assistance, youth work,<br>groups, activities and events.",
          address: "Level 2 James Smith Building, Corner Cuba and Manners streets, Te Aro",
          phone: "(04) 801 9150",
          update_message: "fully functional",
          lat: -41.29077,
          long: 174.777131,
          email: "Evolve@hotmail.com",
          website_url: "https://evolveyouth.org.nz/contact-us/",
          hours: "Open: Monday–Friday 10am -6pm",
          image_url: "/images/providersimages/Evolve.jpeg"
        },


      ]);
    });
};