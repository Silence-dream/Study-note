// src/logical/user/user.service.ts
import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../../database/sequelize'; // 引入 Sequelize 实例
import { encryptPassword, makeSalt } from 'utils/cryptogram';

@Injectable()
export class UserService {
  /**
   * 查询是否有该用户
   * @param username 用户名
   */
  async findOne({ username }: { username: string }): Promise<any | undefined> {
    const sql = `
      SELECT
        user_id userId, account_name username, real_name realName, passwd password,
        passwd_salt salt, mobile, role
      FROM
        admin_user
      WHERE
        account_name = '${username}'
    `; // 一段平淡无奇的 SQL 查询语句
    try {
      const user = (
        await sequelize.query(sql, {
          type: Sequelize.QueryTypes.SELECT, // 查询方式
          raw: true, // 是否使用数组组装的方式展示结果
          logging: true, // 是否将 SQL 语句打印到控制台
        })
      )[0];
      // 若查不到用户，则 user === undefined
      return user;
    } catch (error) {
      console.error(error);
      return void 0;
    }
  }

  /**
   * 注册
   * @param requestionBody 请求体
   */
  async register(requestionBody: any): Promise<any> {
    const { accountName, realName, password, repassword, mobile } =
      requestionBody;
    console.log(requestionBody);
    if (password != repassword) {
      return {
        code: 400,
        msg: '两次密码输入不一致',
      };
    }

    const user = await this.findOne({ username: accountName });
    if (user) {
      return {
        code: 400,
        msg: '用户已存在',
      };
    }
    // 密码盐
    const salt = makeSalt();
    // 加密密码
    const hashPwd = encryptPassword(password, salt);

    const registerSQL = `
    INSERT INTO admin_user
      (account_name, real_name, passwd, passwd_salt, mobile, user_status, role, create_by)
    VALUES
      ('${accountName}', '${realName}', '${hashPwd}', '${salt}', '${mobile}', 1, 3, 0)
    `;

    try {
      await sequelize.query(registerSQL, { logging: false });
      return {
        code: 200,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error:${error}`,
      };
    }
  }
}
