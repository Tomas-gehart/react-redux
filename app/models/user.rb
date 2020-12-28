class User < ApplicationRecord
  # Include default #devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  #devise :database_authenticatable, :registerable,
         
    validates :username, presence: true, uniqueness: true 
    validates :password_digest, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, :session_token, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    attr_reader :password
    before_validation :ensure_session_token

 
    



    
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return @user if @user && @user.is_password?(password)
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
