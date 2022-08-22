import os
from configparser import ConfigParser

# https://stackoverflow.com/a/5137509
dir_path = os.path.dirname(os.path.realpath(__file__))


def config(filename='database.ini', section="postgresql") -> dict:
    """**Makes a dict out of string.**
    Taking info from database.ini to use for the database connection
    :param filename: A ini file containing info for connection in the same folder as this file
    :type filename: str
    :param section: Where in the ini file it should look
    :type section: str
    :return: A dictionary with connection info
    :rtype: dict
    """
    full_filename = os.path.join(dir_path, filename)  # get the full_filename with the dir_path and the file_name
    parser = ConfigParser()  # create a parser instance
    if os.path.exists(full_filename):  # if the file is exists
        parser.read(full_filename)  # read the database.ini file from the path
    else:
        dir_content = os.listdir(dir_path)  # get the content of the dir from the dir path
        raise OSError(F'No {full_filename} found, copy one of the database_*.ini files to database.ini in{dir_path} '
                      f'found {dir_content}')

    db = {}  # create an empty dict

    if parser.has_section(section):  # if we defined a section in our ini file
        params = parser.items(section)  # Return a list of (name, value) tuples for each option in a section
        for key, value in params:  # get the value and a key from the params dict
            if value.lower() == "true":  # if we have  an item
                value = True
            elif value.lower() == 'false':  # if we don't have an item
                value = False
            db[key] = value  # create a dict with a value, depends on we have that item or not.
    else:
        raise Exception(f'Section {section} not found in the {full_filename} file.')

    return db


if __name__ == '__main__':
    c = config('database_remote.ini')  # get the dict
    for key, value in c.items():  # loop over it
        print(key, type(value), value)  # print the key, value and the value type