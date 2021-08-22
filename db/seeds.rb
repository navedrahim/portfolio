# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Project.destroy_all
User.destroy_all


naved = User.create!(username: "bobaloo142", password: "scpswmd1")

pp "#{User.count} users created"

beer_me = Project.create!(name: "Beer Me", github_link: "https://github.com/navedrahim/beer-me", deployed_link: "https://brave-fermat-adf260.netlify.app", description: "Beer Me utilizes a third party API to provide info on breweries. Built with vanilla JavaScript, HTML, CSS.", screenshot: "https://i.imgur.com/lcaXk3h.jpg", user: naved)

electrify = Project.create!(name: "Electrify", github_link: "https://github.com/navedrahim/electrify", deployed_link: "https://electrify.netlify.app/", description: "Electrify is a great place to research electric vehicles. API created using Airtable. Front end built with React", screenshot: "https://i.imgur.com/elj96vJ.jpg", user: naved)

b_side_collective = Project.create!(name: "B-Side Collective", github_link: "https://github.com/navedrahim/b-side-collective", deployed_link: "https://b-side-collective.netlify.app/", description: "This app lets users browse vinyl records and make listings of their own. Built with MongoDB, Mongoose, Express, React", screenshot: "https://i.imgur.com/cBWfi6z.png", user: naved)

pp "#{Project.count} projects created"