class Center < ApplicationRecord
  has_many :users
  has_many :hospitals, through: :users
end
