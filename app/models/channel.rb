class Channel < ApplicationRecord

    validates :user_ids, :title, :channel_type, null: false

    validates :title, length: {minimum: 1}

    validates :title, uniqueness: true

    validates :channel_type, inclusion: {in: ['public', 'private']}

    validates :channel_or_dm, inclusion: {in: ['channel', 'dm']}

    has_many :channels_memberships

    has_many :users,
    through :channels_memberships,
    source: user

    has_many :messages
    
end
