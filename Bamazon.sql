drop database if exists bamazon;
create database bamazon;
use bamazon;
create table products (
	item_id integer(10) not null auto_increment,
    product_name varchar(50) not null,
    department_name varchar(50) not null,
    price decimal(10,2) null,
    stock_quantity integer(10),
    primary key (item_id)
    );
    
    
insert into products (product_name, department_name, price, stock_quantity)
values ("Tennis Racket", "Summer Sports Equipment", 100, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ("Snowboard", "Winter Sports Equipment", 600, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ("Golf Club", "Summer Sports Equipment", 65, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Archery Bow", "Summer Sports Equipment", 300, 7);

insert into products (product_name, department_name, price, stock_quantity)
values ("Skis", "Winter Sports Equipment", 800, 25);

insert into products (product_name, department_name, price, stock_quantity)
values ("Sled", "Winter Sports Equipment", 50, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Ice Skates", "Winter Sports Equipment", 200, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ("Soccer Ball", "Summer Sports Equipment", 30, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ("Baseball Glove", "Summer Sports Equipment", 15, 3);

insert into products (product_name, department_name, price, stock_quantity)
values ("Football", "Summer Sports Equipment", 15, 5);