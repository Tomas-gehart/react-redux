class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true 
    validates :password_digest, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    has_many :messages,
        foreign_key: :##,
        class_name: :Message,
        primary_key: :id 
    
      has_many :channels,
        foreign_key: :##,
        class_name: :Channel,
        primary_key: :id 

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
    end

    def is_password?(password)
        bcrypt_instance = BCrypt::Password.new(self.password_digest)
        bcrypt_instance.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token! 
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
