package demo

import demo.auth.User
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

@Resource(uri = '/api/driver')
@Secured(['ROLE_DRIVER'])
class Driver extends User{

    String name

    static hasMany = [ vehicles: Vehicle]

    static constraints = {
        vehicles nullable: true
    }
}
