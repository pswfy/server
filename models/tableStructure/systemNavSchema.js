const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
//创建事务Schema
const systemNavSchema = new Schema ({
      /********创建时间/最后修改时间********---1---*/
      createTime: {type: Date, default: Date.now},
      updateTime: {type: Date, default: Date.now},
      title: {type: String, trim: true},
      titles: {type: String},
      jurisdiction: [Number],
      sort: {type: String, trim: true, uppercase: true},
      icon: {type: String, trim: true},
      path: {type: String, trim: true, lowercase: true}
    }, {versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}});

/**
 *查询所有数据nav
 * @param callback
 */
systemNavSchema.statics.findAllMenu = function (callback) {
  this.model('systemNav').find({}, callback);
};
/**
 * 查询一级菜单
 * @param callback
 */
systemNavSchema.statics.findOneMenu = function (callback) {
  this.model('systemNav').find({'sort': /^[A-Z]$/}, callback);
};
/**
 * 查询二级菜单
 * @param agu
 * @param callback
 */
systemNavSchema.statics.findTwoMenu = function (agu, callback) {
  this.model('systemNav').find({'sort': /^(agu)([A-Z])$/}, callback);
};
/**
 * 查询三级菜单
 * @param agu
 * @param callback
 */
systemNavSchema.statics.findThreeMenu = function (agu, callback) {
  this.model('systemNav').find({'sort': /^(agu)([A-Z])([A-Z])$/}, callback);
};
/**
 * 查询四级菜单
 * @param agu
 * @param callback
 */
systemNavSchema.statics.findFourMenu = function (agu, callback) {
  this.model('systemNav').find({'sort': /^(agu)([A-Z])([A-Z])([A-Z])$/}, callback);
};
/**
 * 查询五级菜单
 * @param agu
 * @param callback
 */
systemNavSchema.statics.findFiveMenu = function (agu, callback) {
  this.model('systemNav').find({'sort': /^(agu)([A-Z])([A-Z])([A-Z])([A-Z])$/}, callback);
};

//向外暴露 =>创建模型
module.exports = SystemNav = mongoose.model('systemNav', systemNavSchema);


let nav = [
  //一级菜单
  {title: '系统管理', titles: 'system', sort: 'A', jurisdiction: [0, 1], path: '/system', icon: '/system/images/1.png'},
  {title: '公寓管理', titles: 'student', sort: 'B', jurisdiction: [0, 2, 3, 4], path: '/student', icon: '/system/images/2.png'},
  {title: '财务统计', titles: 'teaching', sort: 'C', jurisdiction: [0, 2, 3, 4], path: '/teaching', icon: '/system/images/3.png'},
  {title: '人事管理', titles: 'personnel', sort: 'D', jurisdiction: [0, 2, 4], path: '/personnel', icon: '/system/images/4.png'},
  {title: '数据监控', titles: 'data', sort: 'E', jurisdiction: [0, 2, 4], path: '/data', icon: '/system/images/5.png'},
  {title: '后勤管理', titles: 'logistics', sort: 'F', jurisdiction: [0, 2, 4], path: '/logistics', icon: '/system/images/6.png'},
  {title: '房东中心', titles: 'admin', sort: 'G', jurisdiction: [0, 1, 2, 3, 4], path: '/admin', icon: '/system/images/7.png'},
  {title: '招生管理', titles: 'recruit', sort: 'H', jurisdiction: [0, 2, 4], path: '/recruit ', icon: '/system/images/8.png'},
  {title: '设备管理', titles: 'equipment', sort: 'I', jurisdiction: [0, 2, 4], path: '/equipment', icon: '/system/images/9.png'},
  {title: '基础设置', titles: 'basics', sort: 'J', jurisdiction: [0, 2], path: '/basics', icon: '/system/images/10.png'},
  /*系统管理2*/
  {title: '使用频率', titles: 'frequency', icon: '/system/images/sz.png', sort: 'AA', jurisdiction: [0, 1], path: '/system/frequency'},
  {title: '活跃指数', titles: 'active', icon: '/system/images/sz.png', sort: 'AB', jurisdiction: [0, 1], path: '/system/active'},
  {title: '系统集成', titles: 'integration', icon: '/system/images/sz.png', sort: 'AC', jurisdiction: [0, 1], path: '/system/integration'},
  {title: '角色管理', titles: 'management', icon: '/system/images/sz.png', sort: 'AD', jurisdiction: [0, 1], path: '/system/management'},
  {title: '权限分配', titles: 'allocation', icon: '/system/images/sz.png', sort: 'AE', jurisdiction: [0], path: '/system/allocation'},
  {title: '用户权限', titles: 'rights', icon: '/system/images/sz.png', sort: 'AF', jurisdiction: [0, 1], path: '/system/rights'},
  {title: '登录日志', titles: 'login', icon: '/system/images/sz.png', sort: 'AG', jurisdiction: [0, 1], path: '/system/login'},
  {title: '操作日志', titles: 'operation', icon: '/system/images/sz.png', sort: 'AH', jurisdiction: [0, 1], path: '/system/operation'},
  /*学生管理2*/
  {title: '考勤管理', titles: 'attendance', icon: '/system/images/sz.png', sort: 'BA', jurisdiction: [0, 2, 3, 4], path: '/student/attendance'},
  {title: '家属管理', titles: 'members', icon: '/system/images/sz.png', sort: 'BB', jurisdiction: [0, 2, 3, 4], path: '/student/members'},
  {title: '基本信息', titles: 'information', icon: '/system/images/sz.png', sort: 'BC', jurisdiction: [0, 2, 3, 4], path: '/student/information'},
  {title: '班级管理', titles: 'class', icon: '/system/images/sz.png', sort: 'BD', jurisdiction: [0, 2, 3, 4], path: '/student/class'},
  /*教务管理2*/
  {title: '教学工作', titles: 'teach', icon: '/system/images/sz.png', sort: 'CA', jurisdiction: [0, 2, 4], path: '/teaching/teach'},
  {title: '课程管理', titles: 'curriculum', icon: '/system/images/sz.png', sort: 'CB', jurisdiction: [0, 2, 3, 4], path: '/teaching/curriculum'},
  {title: '成绩管理', titles: 'score', icon: '/system/images/sz.png', sort: 'CC', jurisdiction: [0, 2, 3, 4], path: '/teaching/score'},
  {title: '考务管理', titles: 'affair', icon: '/system/images/sz.png', sort: 'CD', jurisdiction: [0, 2, 3, 4], path: '/teaching/affair'},
  {title: '查询统计', titles: 'statistics', icon: '/system/images/sz.png', sort: 'CE', jurisdiction: [0, 2, 3, 4], path: '/teaching/statistics'},
  {title: '行政办公', titles: 'office', icon: '/system/images/sz.png', sort: 'CF', jurisdiction: [0, 2, 4], path: '/teaching/office'},
  {title: '收费管理', titles: 'charge', icon: '/system/images/sz.png', sort: 'CG', jurisdiction: [0, 2, 4], path: '/teaching/charge'},
  {title: '教室管理', titles: 'classroom', icon: '/system/images/sz.png', sort: 'CH', jurisdiction: [0, 2, 4], path: '/teaching/classroom'},
  /*人事管理2*/
  {title: '考勤管理', titles: 'attendance', icon: '/system/images/sz.png', sort: 'DA', jurisdiction: [0, 2, 4], path: '/personnel/attendance'},
  {title: '人力资源', titles: 'resources', icon: '/system/images/sz.png', sort: 'DB', jurisdiction: [0, 2, 4], path: '/personnel/resources'},
  {title: '宿舍管理', titles: 'management', icon: '/system/images/sz.png', sort: 'DC', jurisdiction: [0, 2, 4], path: '/personnel/management'},
  {title: '通知管理', titles: 'notification', icon: '/system/images/sz.png', sort: 'DD', jurisdiction: [0, 2, 4], path: '/personnel/notification'},
  /*数据监控2*/
  {title: '数据预警', titles: 'warning', icon: '/system/images/sz.png', sort: 'EA', jurisdiction: [0, 2, 4], path: '/data/warning'},
  /*后勤管理*/
  {title: '教材管理', titles: 'material', icon: '/system/images/sz.png', sort: 'FA', jurisdiction: [0, 2, 4], path: '/logistics/material'},
  {title: '报修管理', titles: 'repair', icon: '/system/images/sz.png', sort: 'FB', jurisdiction: [0, 2, 4], path: '/logistics/repair'},
  {title: '办公耗材', titles: 'consumables', icon: '/system/images/sz.png', sort: 'FC', jurisdiction: [0, 2, 4], path: '/logistics/consumables'},
  {title: '校车管理', titles: 'bus', icon: '/system/images/sz.png', sort: 'FD', jurisdiction: [0, 2, 4], path: '/logistics/bus'},
  /*个人中心2*/
  {title: '个人信息', titles: 'settings', icon: '/system/images/sz.png', sort: 'GA', jurisdiction: [0, 1, 2, 3, 4], path: '/admin/settings'},
  {title: '消息推送', titles: 'message', icon: '/system/images/sz.png', sort: 'GB', jurisdiction: [0, 1, 2, 3, 4], path: '/admin/message'},
  {title: '日历管理', titles: 'calendar', icon: '/system/images/sz.png', sort: 'GC', jurisdiction: [0, 1, 2, 3, 4], path: '/admin/calendar'},
  {title: '班级管理', titles: 'class', icon: '/system/images/sz.png', sort: 'GD', jurisdiction: [0, 2, 3, 4], path: '/admin/class'},
  {title: '个人事务', titles: 'affair', icon: '/system/images/sz.png', sort: 'GE', jurisdiction: [0, 1, 2, 3, 4], path: '/admin/affair'},
  /*招生管理2*/
  {title: '招生计划', titles: 'enrolment', icon: '/system/images/sz.png', sort: 'HA', jurisdiction: [0, 2, 4], path: '/recruit/enrolment '},
  {title: '录取信息', titles: 'information', icon: '/system/images/sz.png', sort: 'HB', jurisdiction: [0, 2, 4], path: '/recruit/information'},
  {title: '新生报到', titles: 'name', icon: '/system/images/sz.png', sort: 'HC', jurisdiction: [0, 2, 4], path: '/recruit/name'},
  {title: '分班管理', titles: 'division', icon: '/system/images/sz.png', sort: 'HD', jurisdiction: [0, 2, 4], path: '/recruit/division '},
  {title: '统计报到', titles: 'report', icon: '/system/images/sz.png', sort: 'HE', jurisdiction: [0, 2, 4], path: '/recruit/report'},
  {title: '信息导出', titles: 'export', icon: '/system/images/sz.png', sort: 'HF', jurisdiction: [0, 2, 4], path: '/recruit/export'},
  /*设备管理2*/
  {title: '办公器材', titles: 'equipment', icon: '/system/images/sz.png', sort: 'IA', jurisdiction: [0, 2, 4], path: '/equipment/equipment'},
  {title: '楼宇管理', titles: 'management', icon: '/system/images/sz.png', sort: 'IB', jurisdiction: [0, 2, 4], path: '/equipment/management'},
  {title: '场地管理', titles: 'site', icon: '/system/images/sz.png', sort: 'IC', jurisdiction: [0, 2, 4], path: '/equipment/site '},
  /*基础设置2*/
  {title: '基本信息', titles: 'info', icon: '/system/images/sz.png', sort: 'JA', jurisdiction: [0, 2], path: '/basics/info'},
];

// SystemNav.remove({}, function () {
//   SystemNav.insertMany(nav, (err, data) => {
//     console.log(err);
//     console.log(data);
//   });
// });
