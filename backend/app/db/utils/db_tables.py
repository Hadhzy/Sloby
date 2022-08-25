
create_user_data = '''
    CREATE TABLE USER_DATA(
        ID SERIAL PRIMARY KEY,
        GENDER TEXT NOT NULL,
        IDENT VARCHAR(100) NOT NULL
    )
'''


create_post_data = '''
    CREATE TABLE POST_DATA(
        ID SERIAL PRIMARY KEY,
        POST TEXT NOT NULL,
        DESC  TEXT NOT NULL,
        TITLE  TEXT NOT NULL,
        IDENT VARCHAR(100) NOT NULL
    )
'''






























