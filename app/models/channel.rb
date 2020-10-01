class Channel < ApplicationRecord
    validates :name, :description, :admin_id, presence: true 

    has_many :user_channels



    has_many :users
        through: :user_channels,
        source: :user


end