---
layout: page
title: 关于科协
description: 科协介绍和团队
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core, emeriti, cnTranslator } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>山东师范大学科技协会</template>
    <template #lead>
      科技协会成立于1990年5月4日，是信息科学与工程学院学生自发组织的学术性社团。协会成员主要由对技术充满热情的同学组成，旨在通过实践项目和交流活动，共同提升技术能力，营造浓厚的校园科技氛围。
自成立以来，科技协会已走过34年。在学院老师的指导和支持下，协会不断发展，组织了各类技术讲座、电脑义诊和电竞比赛，为同学们提供了学习和交流的平台。未来，我们将继续努力，为大家带来更多有价值的活动。
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>QQ群</template>
    <template #lead>
      扫码加入我们的QQ群
      <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=nr1-zhPN5I_bfipzd2LrhbaE0Qvep0Lm&jump_from=webapi&authKey=Y15yWupz7AzJlv7yV+uHXdtq1dc6bGSTQ2rm6PI3i++AILuj99k51oTfKDq2NoEr"><img src="./public/qrcode.jpg" height="100px"></a>
    </template>

  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>社团活动</template>
    <template #lead>
      科协举办电脑义诊、电竞赛事、技术讲座等活动。<br><br>
      <strong>电脑义诊</strong><br>
      <img src="./public/dnyz.png"><br>
      <strong>电竞赛事</strong>
      <img src="./public/dj.png">
    </template>
  </VPTeamPageSection>
</VPTeamPage>
