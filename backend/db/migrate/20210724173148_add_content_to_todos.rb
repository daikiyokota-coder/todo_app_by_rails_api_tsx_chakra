class AddContentToTodos < ActiveRecord::Migration[6.1]
  def change
    add_column :todos, :content, :text
  end
end
