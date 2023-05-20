# aws-be

Used SQL script to fill tables with test examples:

create extension if not exists 'uuid-ossp';
drop table products;
drop table stocks;

create table products (
id uuid primary key default uuid_generate_v4(),
title text not null,
description text,
price integer,
link text
);

create table stocks (
id uuid primary key default uuid_generate_v4(),
count integer,
product_id uuid,
foreign key ('product_id') references 'products' ('id')
);

insert into products (title, description, price, link) values
('Trumpet dress', 'Cool dress', 1400, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_mzOM4P5t37qjkBb5xFKP4zpfmPdacvH1w&usqp=CAU'),
('Sheath dress', 'Super dress', 1500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cPnzAplD7jZmSEtMymdbz-2mDm9txTdEMg&usqp=CAU'),
('Sack dress', 'The best dress', 1100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWIECe8iudOKz8XuHDqzzY_PmXl74S7ew7w&usqp=CAU'),
('Wrap around dress', 'Cute dress', 1250, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdErBLAYrpVLNP7Rvye59k9vQOFDluKoGAnA&usqp=CAU'),
('Layered dress', 'Mini dress', 1230, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwn0xz8jtXyiUrn2nleLFCgxLXh2o5KeTi2w&usqp=CAU'),
('Shift dress', 'Looking good', 900, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf39Ih7H2CHUs3VHsogpJzueSUfEB5zJaCfg&usqp=CAU'),
('Sundress', 'For sunny weather', 870, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUJ6Yy6WaHJyYvNtkknS6toVOa89M4ltc-w&usqp=CAU'),
('Tutu dress', 'Maxi dress', 1050, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUBs3UDx-kTB2XOd21dtlf7cedSHknjcP_Q&usqp=CAU')

insert into stocks (product_id, count) values
('1797098f-f8ae-4419-9c1f-6f59f9089507', 2),
('703854c7-b08e-438b-a826-acb67270600f', 3),
('34ca8bfb-696e-49f9-ae0a-f63f127b88be', 5),
('860874b7-58d4-44c8-8656-0367ac3fa9ab', 1),
('db5b999f-577f-44b0-a1a2-cf2de591a38a', 2),
('fcbde92d-52b2-4f23-a176-f09141466e17', 4),
('f3e0898b-05a9-406e-856e-64028b3906a7', 6),
('916800f6-f6f4-4481-8180-1441d7912fcf', 3)
