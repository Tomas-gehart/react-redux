# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ChannelMembership.delete_all
User.delete_all
Channel.delete_all
#Message.delete_all
UserMessage.delete_all

sixlack = User.create!(username: "ricardo", password: "prettylittlefears", email: "sixlack@interscope.com")
jermaine = User.create!(username: "jcole", password: "loveyourz", email: "jcole@dreamville.com")
future = User.create!(username: "futurehxndrxx", password: "maskoff", email: "hndrxx@epicrecords.com")
aubrey = User.create!(username: "drake", password: "popstar", email: "drizzy@ovo.com")
khalid = User.create!(username: "khalid", password: "location", email: "khalid@rca.com")
sean = User.create!(username: "jayz", password: "blueprint", email: "hov@rocafella.com")


#M
#Message.create!(body:"I got two nominations!", 	channels_id: channels_1.id, sender_id: sixlack.id)
#Message.create!(body:"Congrats!", 	channels_id: channels_1.id, sender_id: sean.id)
#Message.create!(body:"Proud of you!", 	channels_id: channels_1.id, sender_id: sean.id)
#Message.create!(body:"Yes!!!!", 	channels_id: channels_1.id, sender_id: khalid.id)
#M
#Message.create!(body:"Anyone need any new features?", 	channels_id: channels_2.id, sender_id: aubrey.id)
#Message.create!(body:"Hmph...", 	channels_id: channels_2.id, sender_id: khalid.id)
#Message.create!(body:"Of course!", 	channels_id: channels_2.id, sender_id: future.id)
#Message.create!(body:"I retired", 	channels_id: channels_2.id, sender_id: sean.id)
#Message.create!(body:"Maybe Jermaine?", 	channels_id: channels_2.id, sender_id: sean.id)
#M
#Message.create!(body:"I want to drop a new project", 	channels_id: channels_3.id, sender_id: jermaine.id)
#Message.create!(body:"Finally!", 	channels_id: channels_3.id, sender_id: sean.id)
#Message.create!(body:"Let's do it", 	channels_id: channels_3.id, sender_id: aubrey.id)



c1 = Channel.create!(
    title: 'General',
    channel_type: 'public',
    channel_or_dm: 'channel',
    created_at: '1/1/2021',
    updated_at: '1/1/2021',
    description: 'who would you work with?'
)
        
c2 = Channel.create!(
    title: 'Atlantic Records',
    channel_type: 'public',
    channel_or_dm: 'channel',
    created_at: '1/1/2021',
    updated_at: '1/1/2021',
    description: 'Aretha Franklin & Led Zeppelin fan club.'
)

c3 = Channel.create!(
    title: 'Interscope Records',
    channel_type: 'public',
    channel_or_dm: 'channel',
    created_at: '1/1/2021',
    updated_at: '1/1/2021',
    description: 'I actually went to school with Ella Mai.'
)


c4 = Channel.create!(
    title: 'Roc-A-Fella',
    channel_type: 'public',
    channel_or_dm: 'channel',
    created_at: '1/1/2021',
    updated_at: '1/1/2021',
    description: 'As active as Jay-Z on twitter.'
)

c5 = Channel.create!(
    title: 'Def Jam',
    channel_type: 'public',
    channel_or_dm: 'channel',
    created_at: '1/1/2021',
    updated_at: '1/1/2021',
    description: 'They really had a videogame.'
)


cm1 = ChannelMembership.create!(
    user_id: User.first.id,
    channel_id: Channel.first.id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm2 = ChannelMembership.create!(
    user_id: User.first.id,
    channel_id: Channel.second.id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm3 = ChannelMembership.create!(
    user_id: User.first.id,
    channel_id: Channel.third.id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm4 = ChannelMembership.create!(
    user_id: User.first.id,
    channel_id: Channel.fourth.id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm5 = ChannelMembership.create!(
    user_id: User.first.id,
    channel_id: Channel.fifth.id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm6 = ChannelMembership.create!(
    user_id: User.first.id,
    channel_id: Channel.find_by(title: 'DemoDude, Solid Snake').id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm7 = ChannelMembership.create!(
    user_id: User.fifth.id,
    channel_id: Channel.find_by(title: 'DemoDude, Solid Snake').id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm8 = ChannelMembership.create!(
    user_id: User.second.id,
    channel_id: Channel.find_by(title: 'DemoDude, Tom Nook').id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

cm9 = ChannelMembership.create!(
    user_id: User.fifth.id,
    channel_id: Channel.find_by(title: 'DemoDude, Tom Nook').id,
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

m1 = Message.create!(
    user_id: User.first.id,
    channel_id: Channel.first.id,
    body: 'Have you seen me on SoundCloud?',
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

m2 = Message.create!(
    user_id: User.second.id,
    channel_id: Channel.first.id,
    body: 'Nope',
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

m3 = Message.create!(
    user_id: User.third.id,
    channel_id: Channel.second.id,
    body: 'Send the link !',
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)

m4 = Message.create!(
    user_id: User.fourth.id,
    channel_id: Channel.second.id,
    body: 'I know Symere Woods.',
    created_at: '1/1/2021',
    updated_at: '1/1/2021'
)