class Channel < ApplicationRecord
    validates :name, :description, :admin_id, presence: true 



end