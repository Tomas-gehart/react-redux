class room < ApplicationRecord
    validates :name, :admin_id, presence: true 

    has_and_belongs_to_many :users



end