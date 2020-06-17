class User < ApplicationRecord
    has_secure_password
    belongs_to :hospital
    belongs_to :center
    validates :username, uniqueness: { case_sensitive: false }
end
