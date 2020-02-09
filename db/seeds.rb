# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts 'Creating projects...'
    project = Project.new(
        name: "Project: Wing It",
        project_link: "http://wing-it-travel.herokuapp.com/",
        project_thumbnail: '/assets/wingitTB.png',
        description: "This is a passion project!"
    )
    project.save!
    project = Project.new(
            name: "Project: React Project Manager",
            project_link: "https://nostalgic-lalande-7ab82e.netlify.com/",
            project_thumbnail: '/assets/reactprojmanager.png',
            description: "This is a passion project!"
        )
    project.save!
    project = Project.new(
            name: "Project: Heroes for Hire",
            project_link: "https://airbnb-mwghburger.herokuapp.com/",
            project_thumbnail: '/assets/heroesforhire.png',
            description: "This is a passion project!"
        )
    project.save!
    project = Project.new(
            name: "Project: Food Haven",
            project_link: "https://food-haven-mw.herokuapp.com/",
            project_thumbnail: '/assets/foodhaven.png',
            description: "This is a passion project!"
        )
    project.save!
puts 'Finished!'