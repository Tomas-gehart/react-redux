class Channel < ApplicationRecord
    validates :name, :description, :admin_id, presence: true 
    validates :name, uniqueness: true

    belongs_to :admin,
        primary_key: id,
        foreign_key: admin_id,
        class_name: :User,

    has_many :users,
        through: :memberships,
        source: :user 
    
    has_many :messages
        foreign_key: admin_id,
        class_name: :Message,
    end
