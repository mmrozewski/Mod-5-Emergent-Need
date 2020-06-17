class Hospital < ApplicationRecord
    has_many :users
    has_many :centers, through: :users
end