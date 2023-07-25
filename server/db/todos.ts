import connection from './connection'
import { Todo } from '../../models/todo'

export function getAllTodos(db = connection): Promise<Todo[]> {
  return db('todo').select()
}
