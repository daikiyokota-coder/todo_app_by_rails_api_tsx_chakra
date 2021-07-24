class Todo < ApplicationRecord
  validates :title, presence: true, length: { maximum: 30 }
  validates :content, length: { maximum: 200 }
end
