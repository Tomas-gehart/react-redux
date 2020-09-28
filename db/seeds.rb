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

grammy_committee = Channel.create!(admin_id: sixlack.id, name: "grammy-nominations", private: false)
record_labels = Channel.create!(admin_id: sixlack.id, name: "new-signings", private: false)
collaboration = Channel.create!(admin_id: sixlack.id, name: "teamwork", private: false)

grammy-committee.users << sixlack
grammy-committee.users << jermaine
grammy-committee.users << future
grammy-committee.users << aubrey

record-labels.users << sean
record-labels.users << sixlack
record-labels.users << khalid
record-labels.users << jermaine

collaboration.users << khalid
collaboration.users << future

Message.create!(content:"2 grammy nominations!", 	channel_id: channel_1.id, sender_id: sixlack.id)
Message.create!(content:"good job!", 	channel_id: channel_1.id, sender_id: jermaine.id)
Message.create!(content:"glad I was apart of it", 	channel_id: channel_1.id, sender_id: jermaine.id)
Message.create!(content:"congratulations!", 	channel_id: channel_1.id, sender_id: sean.id)
Message.create!(content:"keep working hard!", 	channel_id: channel_1.id, sender_id: aubrey.id)
Message.create!(content:"feature coming soon", 	channel_id: channel_1.id, sender_id: aubrey.id)