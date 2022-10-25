def read_file(file_path):
    """Returns file content"""
    with open(file_path, 'r') as file:
        file_as_string = file.read()
    return file_as_string

