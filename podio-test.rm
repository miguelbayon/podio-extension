require 'rubygems'
require 'podio'

Podio.setup(:api_key => 'podio-test-tlsahd', :api_secret => '2n58yCGAMh4uIs2Ga3OrACaF8nl6QkFZqyW3hFIK71U3PovVJDuXnbvjd3RAJLKd')
Podio.client.authenticate_with_credentials('miguel.bayon@iessanandres.com', '248830Mba')

# Print a list of organizations I'm a member of
my_orgs = Podio::Organization.find_all

my_orgs.each do |org|
  puts org.name
  puts org.url
end