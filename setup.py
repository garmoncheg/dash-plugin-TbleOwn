from setuptools import setup

exec (open('dash_components_table_own/version.py').read())

setup(
    name='dash_components_table_own',
    version=__version__,
    author='garmoncheg',
    packages=['dash_components_table_own'],
    include_package_data=True,
    license='MIT',
    description='Custom implementation of a dash component "Table"',
    install_requires=[]
)
