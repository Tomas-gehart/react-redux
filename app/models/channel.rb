class Channel < ApplicationRecord
    validates :name, uniqueness: true

    has_many :users,
    has_many :messages


end
