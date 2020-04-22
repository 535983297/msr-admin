import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'
export default {

  // 分页查询
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 新增
  save(teacher) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id查询对象
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  // 修改讲师对象
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  },
  // 根据id删除讲师对象
  removeById(teacherId) { // 1
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'delete'
    })
  }

}
