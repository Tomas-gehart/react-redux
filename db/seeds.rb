# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
Message.destroy_all

sixlack = User.create!(username: "ricardo", password: "prettylittlefears", email: "sixlack@interscope.com")
jermaine = User.create!(username: "jcole", password: "loveyourz", email: "jcole@dreamville.com")
future = User.create!(username: "futurehxndrxx", password: "maskoff", email: "hndrxx@epicrecords.com")
aubrey = User.create!(username: "drake", password: "popstar", email: "drizzy@ovo.com")
khalid = User.create!(username: "khalid", password: "location", email: "khalid@rca.com")
sean = User.create!(username: "jayz", password: "blueprint", email: "hov@rocafella.com")

channel_1 = Channel.create!(admin_id: sean.id, name: "new-signings", is_private: false)
channel_2 = Channel.create!(admin_id: jermaine.id, name: "collabs", is_private: false)
channel_3 = Channel.create!(admin_id: sean.id, name: "label-meeting", is_private: false)

Message.create!(body:"I got two nominations!", 	channel_id: channel_1.id, sender_id: sixlack.id)
Message.create!(body:"Congrats!", 	channel_id: channel_1.id, sender_id: sean.id)
Message.create!(body:"Proud of you!", 	channel_id: channel_1.id, sender_id: sean.id)
Message.create!(body:"Yes!!!!", 	channel_id: channel_1.id, sender_id: khalid.id)

Message.create!(body:"Anyone need any new features?", 	channel_id: channel_2.id, sender_id: aubrey.id)
Message.create!(body:"Hmph...", 	channel_id: channel_2.id, sender_id: khalid.id)
Message.create!(body:"Of course!", 	channel_id: channel_2.id, sender_id: future.id)
Message.create!(body:"I retired", 	channel_id: channel_2.id, sender_id: sean.id)
Message.create!(body:"Maybe Jermaine?", 	channel_id: channel_2.id, sender_id: sean.id)

Message.create!(body:"I want to drop a new project", 	channel_id: channel_3.id, sender_id: jermaine.id)
Message.create!(body:"Finally!", 	channel_id: channel_3.id, sender_id: sean.id)
Message.create!(body:"Let's do it", 	channel_id: channel_3.id, sender_id: aubrey.id)