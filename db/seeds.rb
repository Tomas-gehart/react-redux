# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
room.destroy_all
Message.destroy_all

sixlack = User.create!(username: "ricardo", password: "prettylittlefears", email: "sixlack@interscope.com")
jermaine = User.create!(username: "jcole", password: "loveyourz", email: "jcole@dreamville.com")
future = User.create!(username: "futurehxndrxx", password: "maskoff", email: "hndrxx@epicrecords.com")
aubrey = User.create!(username: "drake", password: "popstar", email: "drizzy@ovo.com")
khalid = User.create!(username: "khalid", password: "location", email: "khalid@rca.com")
sean = User.create!(username: "jayz", password: "blueprint", email: "hov@rocafella.com")

room_1 = room.create!(admin_id: sean.id, name: "new-signings", is_private: false)
room_2 = room.create!(admin_id: jermaine.id, name: "collabs", is_private: false)
room_3 = room.create!(admin_id: sean.id, name: "label-meeting", is_private: false)

Message.create!(body:"I got two nominations!", 	room_id: room_1.id, sender_id: sixlack.id)
Message.create!(body:"Congrats!", 	room_id: room_1.id, sender_id: sean.id)
Message.create!(body:"Proud of you!", 	room_id: room_1.id, sender_id: sean.id)
Message.create!(body:"Yes!!!!", 	room_id: room_1.id, sender_id: khalid.id)

Message.create!(body:"Anyone need any new features?", 	room_id: room_2.id, sender_id: aubrey.id)
Message.create!(body:"Hmph...", 	room_id: room_2.id, sender_id: khalid.id)
Message.create!(body:"Of course!", 	room_id: room_2.id, sender_id: future.id)
Message.create!(body:"I retired", 	room_id: room_2.id, sender_id: sean.id)
Message.create!(body:"Maybe Jermaine?", 	room_id: room_2.id, sender_id: sean.id)

Message.create!(body:"I want to drop a new project", 	room_id: room_3.id, sender_id: jermaine.id)
Message.create!(body:"Finally!", 	room_id: room_3.id, sender_id: sean.id)
Message.create!(body:"Let's do it", 	room_id: room_3.id, sender_id: aubrey.id)