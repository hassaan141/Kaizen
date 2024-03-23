import {  } from 'drizzle-orm/mysql-core';
import {integer, pgEnum, pgTable, timestamp, serial, text, varchar,  } from 'drizzle-orm/pg-core';

//create chat when user clicks go to chats
//Each chat is one row is the database 

export const userSystemEnum = pgEnum('user_system_enum', ['system', 'user'])

export const chats = pgTable('chats',{
  id: serial('id').primaryKey(),
  pdfName: text('pdf_name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  userId: varchar('user_id', {length:256}).notNull(),
  fileKey: text('file_key').notNull()
})

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  chatId: integer('chat_id').references(()=>chats.id).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  role: 
})
