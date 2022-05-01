create table InfoEmpresa(
	id bigserial  not null primary key,
	titulo varchar (255) not null,
	contenido text
)

insert into InfoEmpresa(titulo, contenido) VALUES 

		('Acerca de', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim esse illo inventore veniam, voluptas porro ea aut suscipit velit facilis eligendi molestias sit, aliquid saepe nihil minima, accusantium dignissimos laborum? Possimus iusto dolor deserunt, excepturi delectus eligendi molestiae necessitatibus iste quae blanditiis optio culpa dolore ipsa labore libero, quam non rerum aliquam sequi explicabo, accusantium beatae consequatur dignissimos qui! Unde voluptatibus praesentium eligendi ullam tenetur ut rem aliquam earum'),
        ('Mision', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim esse illo inventore veniam, voluptas porro ea aut suscipit velit facilis eligendi molestias sit, aliquid saepe nihil minima, accusantium dignissimos laborum? Possimus iusto dolor deserunt, excepturi delectus eligendi molestiae necessitatibus iste quae blanditiis optio culpa dolore ipsa labore libero, quam non rerum aliquam sequi explicabo, accusantium beatae consequatur dignissimos qui! Unde voluptatibus praesentium eligendi ullam tenetur ut rem aliquam earum'),
		('Vision', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim esse illo inventore veniam, voluptas porro ea aut suscipit velit facilis eligendi molestias sit, aliquid saepe nihil minima, accusantium dignissimos laborum? Possimus iusto dolor deserunt, excepturi delectus eligendi molestiae necessitatibus iste quae blanditiis optio culpa dolore ipsa labore libero, quam non rerum aliquam sequi explicabo, accusantium beatae consequatur dignissimos qui! Unde voluptatibus praesentium eligendi ullam tenetur ut rem aliquam earum')
         ;   
        
