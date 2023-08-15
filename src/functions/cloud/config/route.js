module.exports = {

  // note: 地址管理
  'address/get': 'address_controller@getList',
  'address/update': 'address_controller@update',
  'address/delete': 'address_controller@delete',
  'address/create': 'address_controller@create',

  // note: 发布相关
  'release/get': 'release_controlle@getList',
  'release/delete': 'release_controlle@delete',
  'release/create': 'release_controlle@create',
  'release/update': 'release_controlle@update',
  'release/getonebyid': 'release_controlle@getOne',

  // note: 用户管理
  'user/get': 'user_controlle@getList',
  'user/delete': 'user_controlle@delete',
  'user/create': 'user_controlle@create',
  'user/update': 'user_controlle@update',
  'user/currentcole': 'user_controlle@getOne',

  // note: 后台管理部分
  'admin/isadmin': 'admin/base_admin_controller@isAdmin',

  'admin/class_manager_list': 'admin/class_manager_controller@getList',
  'admin/add_class_manager_item': 'admin/class_manager_controller@addClassItem',
  'admin/update_class_manager_item': 'admin/class_manager_controller@updateClassItem',
  'admin/delete_class_manager_item': 'admin/class_manager_controller@deleteClassItem',

  'admin/product_manager_list': 'admin/product_manager_controller@getList',
  'admin/add_product_manager_item': 'admin/product_manager_controller@addProductItem',
  'admin/update_product_manager_item': 'admin/product_manager_controller@updateProductItem',
  'admin/delete_product_manager_item': 'admin/product_manager_controller@deleteProductItem',

  'admin/banner_manager_list': 'admin/banner_manager_controller@getList',
  'admin/add_banner_manager_item': 'admin/banner_manager_controller@addBannerItem',
  'admin/update_banner_manager_item': 'admin/banner_manager_controller@updateBannerItem',
  'admin/delete_banner_manager_item': 'admin/banner_manager_controller@deleteBannerItem',

  'admin/us_manager_list': 'admin/us_manager_controller@getList',
  'admin/update_us_manager_item': 'admin/us_manager_controller@updateUsItem'

}
